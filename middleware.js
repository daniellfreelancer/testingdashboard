import { NextResponse } from "next/server";

const uriLocal = "http://localhost:3000"
const uriWeb = "https://testingdashboardvm.netlify.app"

export default function middleware(req){
    let verify = req.cookies.get('adminToken') ;
    let url = req.url;

    if (!verify && url.includes('/dashboard')){
        return NextResponse.redirect(uriWeb)
    }

    if (verify && url === uriWeb) {
        return NextResponse.redirect(`${uriWeb}/dashboard`)
    }
}