import { mailOptions, sendWelcomeEmail } from './../../config/nodemailer';
import { transporter } from "@/app/config/nodemailer"
import Reservation from "../../(models)/reservation"
import { NextRequest,NextResponse } from "next/server"

import { fetchAllReservations } from '@/app/(models)/reservation';

export async function GET(req: NextRequest) {
        const reservations = await fetchAllReservations();
        return NextResponse.json({ reservations: reservations }, { status: 202 });
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const reservationData = body;
    await Reservation.create(reservationData);
    const res = await sendWelcomeEmail(reservationData.Email, reservationData.FullName);

    if (res.success) {
      return NextResponse.json({ message: 'Reservation submitted successfully' }, { status: 201 });
    } else {
      throw new Error(res.error);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error("Error processing reservation:", errorMessage);
    return NextResponse.json({ message: 'error', error: errorMessage }, { status: 500 });
  }
}
