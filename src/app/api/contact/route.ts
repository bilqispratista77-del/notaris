import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Nama, telepon, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    // Validate name length
    if (name.length < 3) {
      return NextResponse.json(
        { error: "Nama minimal 3 karakter." },
        { status: 400 }
      );
    }

    // Validate phone format
    const phoneRegex = /^[0-9+\-\s()]{8,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Format nomor telepon tidak valid." },
        { status: 400 }
      );
    }

    // In a production environment, you would:
    // 1. Send email notification to the notary
    // 2. Store the consultation request in a database
    // 3. Send auto-reply to the client
    // 4. Integrate with CRM or task management system

    // For this demo, we'll simulate a successful submission
    console.log("Contact form submission:", {
      name,
      email: email || "-",
      phone,
      service: service || "-",
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Terima kasih! Pesan Anda telah diterima. Kami akan menghubungi Anda dalam 1x24 jam.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
