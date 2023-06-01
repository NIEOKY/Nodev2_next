import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(400).json({ message: "Method not allowed" });
    }                                                                                                  
    const { name, email, message } = req.body;
    
    const sgMail =  await require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
        to: 'nodev.contacto@gmail.com',
        from: 'nodev.contacto@gmail.com',
        subject: `Message from ${name} with email ${email}`,
        text: message,
        html: `<strong>${message}</strong>`,
    };

   
        await sgMail.send(msg).then(() => {
            console.log("Email sent");
            res.status(200).json({ message: "Email sent" });
        }
        ).catch((error: any) => {
            console.log("error", error);
          console.log(error);
            console.log(error.response.body);
          res.status(400).json({ message: "Email not sent " });

        }
        );
      


}