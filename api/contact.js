export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      phone,
      email,
      service,
      message,
    } = req.body;


    const text = `
🔔 New Website Inquiry

👤 Name:
${name}

📞 Phone:
${phone}

📧 Email:
${email}

🪑 Service:
${service}

💬 Message:
${message}
    `;


    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );


    if (!response.ok) {
      throw new Error("Telegram API failed");
    }


    return res.status(200).json({
      success: true,
    });


  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success:false,
      error:"Failed to send message",
    });

  }
}