import os
import PyPDF2
from PIL import Image
import pytesseract

def pdf_to_text(pdf_file):
    pdf = PyPDF2.PdfFileReader(pdf_file)
    text = ''
    image_text = ''
    for page in range(pdf.getNumPages()):
        pdf_page = pdf.getPage(page)
        pdf_images = pdf_page.images
        text += pdf_page.extractText()
        if pdf_images:
            for image in pdf_images.values():
                image = Image.open(image.stream)
                image_text += pytesseract.image_to_string(image)
    return text, image_text

def main():
    for pdf_file in os.listdir():
        if pdf_file.endswith('.pdf'):
            text, image_text = pdf_to_text(pdf_file)
            filename = os.path.splitext(pdf_file)[0]
            with open(filename + '-text.txt', 'w') as f:
                f.write(text)
            with open(filename + '-image.txt', 'w') as f:
                f.write(image_text)

if __name__ == '__main__':
    main()