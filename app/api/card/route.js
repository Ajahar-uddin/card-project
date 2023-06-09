import {NextResponse} from "next/server";


export async function GET(request) {
    const res = await fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020');
    const data = await res.json();
    return NextResponse.json(data);
}
