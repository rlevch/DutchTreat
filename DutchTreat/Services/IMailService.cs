namespace DutchTreat.Services
{
    public interface IMailService
    {
        void SendEmail(string to, string subject, string body);
    }
}