import { mailOptions } from './../../config/nodemailer';
import { transporter } from "@/app/config/nodemailer"
import Reservation from "../../(models)/reservation"
import { NextRequest,NextResponse } from "next/server"

import { fetchAllReservations } from '@/app/(models)/reservation';

export async function GET(req: NextRequest) {
        const reservations = await fetchAllReservations();
        console.log('-----> ',reservations)
        return NextResponse.json({ reservations: reservations }, { status: 202 });
}


export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      const reservationData = body;
      await Reservation.create(reservationData);
      console.log("Reservation data saved to database:", reservationData);
  
      await transporter.sendMail({
        ...mailOptions,
        subject: 'test',
        text: 'test',
        html: '<h1>test</h1>'
      });
      console.log("Mail sent successfully!");
      
      return NextResponse.json({ message: 'Reservation Submitted' }, { status: 201 });
    } catch (error) {
      console.error("Error processing reservation:", error);
      return NextResponse.json({ message: 'error', error }, { status: 500 });
    }
  }