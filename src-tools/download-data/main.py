import os
import requests 
from supabase import create_client, Client
import razorpay
import pathlib as pl
import dotenv
import json
import csv
import datetime


current_file_path = pl.Path(__file__).parent.absolute()
root_path = pl.Path(current_file_path).parent.parent.absolute()
#check if .env file exists in current directory

PUBLIC_SUPABASE_URL="https://yqcjrqdwtipoxygooqlu.supabase.co"
PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY2pycWR3dGlwb3h5Z29vcWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyOTgxODMsImV4cCI6MTk5MTg3NDE4M30.KYI9qdp1ML0a9KC1fYTXYT7JbvET-8BiY7Dzr9o5H70"
SUPABASE_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY2pycWR3dGlwb3h5Z29vcWx1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NjI5ODE4MywiZXhwIjoxOTkxODc0MTgzfQ.1IWMqTv6B_rz_ytwiXjmg-knMnIPHESzT7a7FE93pls"
RZP_SECRET="kDPeAN8jKDsYi3uv8wsgPp17"
PUBLIC_RZP_KEY="rzp_live_H1WKmkIihs8OsQ"
SMTP_USER="noreply.adhyaaya.gcoen@gmail.com"
SMTP_PASS="igkjyaxyjrbefqkf"
SG_KEY="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"





supabase:Client = create_client(PUBLIC_SUPABASE_URL, SUPABASE_SECRET)

timestamp = datetime.datetime.now().strftime("%Y-%m-%d-%H-%M-%S")
r = supabase.table("registrations").select("*").execute()

# check razorpay for payments 
rzp_client = razorpay.Client(auth=(PUBLIC_RZP_KEY, RZP_SECRET))
rzp_orders = (rzp_client.order.all({"count": 100})['items'])


DB_ORDERS = [] 
# This order is of my own testing, so including as to not create any errors
DB_ORDERS.append('order_LGgSbHdlqaCens')


# check list of orders, if they are in system
for data in r.data:
    if data["rzp_oid"] not in DB_ORDERS:
        DB_ORDERS.append(data["rzp_oid"])


for rzp_order in rzp_orders:
    if rzp_order['id'] in DB_ORDERS:
        continue
    else:
        # Check if the order is paid
        if rzp_order['amount_paid'] == rzp_order['amount']:
            # order is paid, but not in DB
            print(F"Orphaned order: {rzp_order['id']} ; Trying to add to DB")
            # get order details
            rzp_payment = rzp_client.order.payments(rzp_order['id'])
            # get payment details
            if rzp_payment['count'] != 0:
                # The order has a payment
                for payment in rzp_payment['items']:
                    if payment['status'] in ('captured', 'paid', 'accepted', 'settled'):
                        desc = payment['description']
                        name = desc.split('Payment by')[1].split('for')[0].strip()
                        event_id = desc.split('for')[1].split(',')[0].strip()
                        data_to_db = {
                            "name": name,
                            "phone": payment['contact'].replace('+91', ""),
                            "email": payment['email'],
                            "edu_institute": "Added Manually",
                            "edu_year": "Added Manually",
                            "edu_spl": "Added Manually",
                            "team": [],
                            "event_id": event_id,
                            "amount": rzp_order['amount'],
                            "used": False,
                            "status": True,
                            "rzp_oid": rzp_order['id'],
                            "rzp_pid": payment['id'],
                            "rzp_sig": "Added Manually",
                            "rzp_status":"PAID",
                            "custom": {}
                        }
                        r2 = supabase.table('registrations').insert([data_to_db]).execute()
                        print(r2)
                
            
        else: 
            continue



DATA = {}

for data in r.data:
    if data['rzp_status'] != 'PAID':
        # Check the status of the order
        print(F"Checking order: {data['rzp_oid']}")
        rzp_order = rzp_client.order.fetch(data['rzp_oid'])
        if rzp_order['entity'] != "collection" and (rzp_order['status'] in ("captured", "paid")):
                data['rzp_status'] = 'PAID'
                data['rzp_pid'] = rzp_client.order.payments(data['rzp_oid'])['items'][0]['id']
                data['rzp_sig'] = "Added Manually"
                print(f"Order {data['rzp_oid']} is PAID, updating DB")
                requests.get(f'https://adhyaaya.org/pg/check_status?rzp_oid={data["rzp_oid"]}&rzp_pid={data["rzp_pid"]}&rzp_sig=ilikepussi')
                # print(f"Order {data['rzp_oid']} is not PAID, skipping")
    
    if data["event_id"] not in DATA:
        DATA[data["event_id"]] = [data]
    else:
        DATA[data["event_id"]].append(data)

pl.Path(current_file_path / f"{timestamp}").mkdir(parents=True, exist_ok=True)

for key in DATA.keys():
    with open(str(current_file_path / f"{timestamp}" / f'{key}.json'), "w") as f_json:
        with open(str(current_file_path / f"{timestamp}" / f'{key}.csv'), "w", newline="") as f_csv:
            csv_writer = csv.writer(f_csv)
            csv_writer.writerow(DATA[key][0].keys())
            for data in DATA[key]:
                csv_writer.writerow(data.values())
            f_json.write(json.dumps(DATA[key], indent=4))
            
print("DONE")