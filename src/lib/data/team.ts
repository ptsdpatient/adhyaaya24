export interface AdhyaaayaTeamMemberSocial {
	// icon from iconify, such as "mdi:facebook"
	icon: string;
	// link to the social media profile
	link: string;
}

export interface AdhyaaayaTeamMember {
	// full name
	name: string;
	// role in the whole team, such as TECHNICAL HEAD
	role: string;
	// 480x480 image url
	image: string;
	// a 1 line description.
	description: string;
	// social media links
	social: AdhyaaayaTeamMemberSocial[];
}

export const ADVISORS: AdhyaaayaTeamMember[] = [];

export const COORDINATORS: AdhyaaayaTeamMember[] = [];

export const TECHNICAL: AdhyaaayaTeamMember[] = [];

export const HND: AdhyaaayaTeamMember[] = [];

export const CND: AdhyaaayaTeamMember[] = [];

export const ORGANIZATION: AdhyaaayaTeamMember[] = [];

export const SPONSORSHIP: AdhyaaayaTeamMember[] = [];

export const PUBLICITY: AdhyaaayaTeamMember[] = [];

export const ACCOUNTING: AdhyaaayaTeamMember[] = [];
