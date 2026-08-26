using System.Net;
using System.Net.Mail;
using Futovat.API.Interfaces;

namespace Futovat.API.Services;

public class EmailService : IEmailService
{
    private readonly IConfiguration _configuration;

    public EmailService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task SendContactEmailAsync(
        string name,
        string email,
        string company,
        string service,
        string message)
    {
        var settings = _configuration.GetSection("EmailSettings");

        var from = settings["From"];
        var password = settings["Password"];
        var host = settings["Host"];
        var port = int.Parse(settings["Port"]!);

        using var smtp = new SmtpClient(host, port);

        smtp.Credentials = new NetworkCredential(from, password);
        smtp.EnableSsl = true;

        var mail = new MailMessage();

        // Email account used to send the message
        mail.From = new MailAddress(from!);

        // All contact form inquiries are delivered here
        mail.To.Add("info@futovat.com");

        mail.Subject = "New Contact Inquiry - Futovat";

        mail.IsBodyHtml = true;

        mail.Body = $@"
            <h2>New Contact Inquiry</h2>

            <p><strong>Name:</strong> {name}</p>

            <p><strong>Email:</strong> {email}</p>

            <p><strong>Company:</strong> {company}</p>

            <p><strong>Service:</strong> {service}</p>

            <p><strong>Message:</strong></p>

            <p>{message}</p>
        ";

        await smtp.SendMailAsync(mail);
    }
}