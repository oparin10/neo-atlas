using Api.Models;

namespace Api.Services;

public interface IContactService
{
    ContactItem CreateContact(ContactItem contact);
    ContactItem? GetContactItem(long id);
}

public class ContactService : IContactService
{
    private readonly ContactContext _dbContext;


    public ContactService(ContactContext context)
    {
        _dbContext = context;
    }

    public ContactItem CreateContact(ContactItem contact)
    {
        _dbContext.Contacts.Add(contact);
        _dbContext.SaveChanges();
        return contact;
    }

    public ContactItem? GetContactItem(long id)
    {
        var contact = _dbContext.Contacts.FirstOrDefault(c => c.Id == id);


        return contact;
    }
}