using Api.Models;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;


[ApiController]
[Route("api/contacts")]
public class _ContactsController : ControllerBase
{

    private readonly IContactService _contactService;

    public _ContactsController(IContactService contactService)
    {
        _contactService = contactService;
    }


    [HttpPost]
    public async Task<ActionResult<ContactItem>> CreateContact(ContactItem contact)
    {
        var createdContact = _contactService.CreateContact(contact);

        return Ok(createdContact);
    }


    [HttpGet("{id}")]
    public ActionResult<ContactItem> GetContact(long id)
    {

        var contact = _contactService.GetContactItem(id);

        if (contact == null)
        {
            return NotFound();
        }

        return Ok(contact);
    }
}