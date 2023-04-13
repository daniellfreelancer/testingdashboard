import { NextResponse } from "next/server";


const uriWeb = "https://testingdashboardvm.netlify.app"
//const uriWeb = "http://localhost:3000"

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
