"use server";

interface PurchaseData {
  customerName: string;
  customerEmail: string;
  bookName: string;
  bookPrice: string;
  orderId?: string;
  purchaseDate: string;
}

export async function sendPurchaseAcknowledgementEmail(data: PurchaseData): Promise<boolean> {
  try {
    // In a real implementation, you would use a proper email service like:
    // - SendGrid
    // - Mailgun
    // - Amazon SES
    // - Resend
    // - etc.

    const emailContent = {
      to: data.customerEmail,
      subject: `Order Confirmation - ${data.bookName}`, // Your existing subject
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background: linear-gradient(to right, #3d1158, #6B2D8B); padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Podio Academy</h1>
            <p style="color: #ffbf47; margin: 5px 0 0 0; font-size: 16px;">Order Confirmation</p>
          </div>
          
          <div style="padding: 30px; background: white; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 6px 6px;">
            <div style="background: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #3d1158; margin: 0 0 10px 0; font-size: 20px;">Thank You for Your Purchase!</h2>
              <p style="color: #526274; margin: 0; font-size: 16px;">
                Dear ${data.customerName},<br>
                Your order has been successfully placed and is being processed.
              </p>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
              <h3 style="color: #3d1158; margin: 0 0 15px 0; font-size: 18px;">Order Details</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #526274; font-weight: bold;">Product</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #07101f;">${data.bookName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #526274; font-weight: bold;">Price</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #07101f;">${data.bookPrice}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #526274; font-weight: bold;">Order ID</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #07101f;">${data.orderId || 'PODIO-' + Date.now()}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; color: #526274; font-weight: bold;">Purchase Date</td>
                  <td style="padding: 10px; color: #07101f;">${data.purchaseDate}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin-top: 25px; padding: 20px; background: #f0f9ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
              <h3 style="color: #3b82f6; margin: 0 0 10px 0; font-size: 16px;">What's Next?</h3>
              <ul style="color: #526274; margin: 0; padding-left: 20px; font-size: 14px;">
                <li style="margin-bottom: 8px;">You'll receive an email with download links (for digital products) or shipping information (for physical books) within 24 hours.</li>
                <li style="margin-bottom: 8px;">Our team will contact you within 24 hours to confirm your order and answer any questions.</li>
                <li style="margin-bottom: 8px;">Access your purchase history in your Podio account for future downloads or support.</li>
              </ul>
            </div>
            
            <div style="margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 20px;">
              <p style="color: #526274; margin: 0 0 10px 0; font-size: 14px;">Need help with your order?</p>
              <p style="color: #6B2D8B; margin: 0; font-weight: bold; font-size: 14px;">
                Email: PodioForKids@gmail.com | Phone: +44 7498 502571
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} Podio Academy. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Mock implementation - replace with actual email service
    console.log("Email would be sent to:", data.customerEmail);
    console.log("Subject:", emailContent.subject);
    console.log("Content length:", emailContent.html.length);

    // For now, we'll just return true to indicate success
    // In production, this would call the actual email service API
    return true;
  } catch (error) {
    console.error("Failed to send purchase acknowledgment email:", error);
    throw error;
  }
}

export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  try {
    const emailContent = {
      to: "PodioForKids@gmail.com",
      subject: `Contact Form: ${data.subject}`, // Your existing subject
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background: linear-gradient(to right, #3d1158, #6B2D8B); padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #ffbf47; margin: 5px 0 0 0; font-size: 16px;">Podio Academy</p>
          </div>
          
          <div style="padding: 30px; background: white; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 6px 6px;">
            <h2 style="color: #3d1158; margin: 0 0 20px 0; font-size: 20px;">New Contact Request</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; color: #526274; font-weight: bold; width: 30%;">Name</td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; color: #07101f;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; color: #526274; font-weight: bold;">Email</td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; color: #07101f;">${data.email}</td>
              </tr>
              ${data.phone ? `
              <tr>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; color: #526274; font-weight: bold;">Phone</td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; color: #07101f;">${data.phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; color: #526274; font-weight: bold;">Subject</td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; color: #07101f;">${data.subject}</td>
              </tr>
              <tr>
                <td style="padding: 12px 10px; color: #526274; font-weight: bold; vertical-align: top;">Message</td>
                <td style="padding: 12px 10px; color: #07101f; white-space: pre-wrap;">${data.message}</td>
              </tr>
            </table>
            
            <div style="margin-top: 25px; padding: 15px; background: #fef2f2; border-left: 4px solid #dc2626; border-radius: 4px;">
              <p style="color: #991b1b; margin: 0; font-size: 14px; font-weight: bold;">Action Required:</p>
              <p style="color: #7f1d1d; margin: 5px 0 0 0; font-size: 14px;">Please respond to this inquiry within 24 hours.</p>
            </div>
          </div>
        </div>
      `,
    };

    console.log("Contact form email would be sent to:", emailContent.to);
    console.log("Subject:", emailContent.subject);

    return true;
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    throw error;
  }
}