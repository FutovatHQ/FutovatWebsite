using Futovat.API.DTOs;
using Futovat.API.Interfaces;
using Futovat.API.Responses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Futovat.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[AllowAnonymous]
public class ContactController : ControllerBase
{
    private readonly IContactService _contactService;

    public ContactController(IContactService contactService)
    {
        _contactService = contactService;
    }

    [HttpPost]
    public async Task<IActionResult> Create(ContactRequest request)
    {
        var result = await _contactService.CreateContactAsync(request);

        if (!result)
        {
            return BadRequest(new ApiResponse<object>
            {
                Success = false,
                Message = "Failed to submit contact inquiry.",
                Data = null
            });
        }

        return Ok(new ApiResponse<object>
        {
            Success = true,
            Message = "Contact inquiry submitted successfully.",
            Data = null
        });
    }
}