using Api.Context;
using Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Services;

public interface IContactService
{
    Task<ActionResult<ContactItem>> CreateContact(ContactItem contact);
    Task<ActionResult<ContactItem>?> GetContactItem(long id);
}

public class ContactService : IContactService
{
    private readonly WebsiteContext _dbContext;


    public ContactService(WebsiteContext context)
    {
        _dbContext = context;
    }

    public async Task<ActionResult<ContactItem>> CreateContact(ContactItem contact)
    {
        await _dbContext.Contacts.AddAsync(contact);
        await _dbContext.SaveChangesAsync();
        return contact;
    }

    public async Task<ActionResult<ContactItem>?> GetContactItem(long id)
    {
        var contact = await _dbContext.Contacts.FindAsync(id);

        if (contact == null)
        {
            return null;
        }


        return contact;
    }
}