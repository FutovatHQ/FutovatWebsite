using Futovat.API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Futovat.API.Controllers;

[ApiController]
[Route("api/admin/contact")]
[Authorize(Roles = "Admin")]
public class AdminContactController : ControllerBase
{
    private readonly IContactService _contactService;

    public AdminContactController(IContactService contactService)
    {
        _contactService = contactService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var contacts = await _contactService.GetAllContactsAsync();

        return Ok(contacts);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var contact = await _contactService.GetContactByIdAsync(id);

        if (contact == null)
            return NotFound();

        return Ok(contact);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _contactService.DeleteContactAsync(id);

        if (!deleted)
            return NotFound();

        return Ok("Contact deleted successfully.");
    }

    [HttpPatch("{id}/read")]
    public async Task<IActionResult> MarkAsRead(int id)
    {
        var success = await _contactService.MarkAsReadAsync(id);

        if (!success)
            return NotFound();

        return Ok("Contact marked as read.");
    }
}