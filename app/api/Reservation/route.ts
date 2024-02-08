import { mailOptions } from './../../config/nodemailer';
import { transporter } from "@/app/config/nodemailer"
import Reservation from "../../(models)/reservation"
import { NextRequest,NextResponse } from "next/server"


export async function POST(req : NextRequest){
    try{
        const body = await req.json()
        const reservationData = body
        await Reservation.create(reservationData)
        await transporter.sendMail({
            ...mailOptions,
            subject:'test',
            text:'test',
            html:'<h1>test</h1>'
        })
        return NextResponse.json({message: 'Reservation Submitted'}, {status:201})
    } catch(error) {
        return NextResponse.json({message: 'error', error}, {status:500})
    }
}