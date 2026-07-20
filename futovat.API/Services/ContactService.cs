using Futovat.API.Data;
using Futovat.API.DTOs;
using Futovat.API.Entities;
using Futovat.API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Futovat.API.Services;

public class ContactService : IContactService
{
    private readonly ApplicationDbContext _context;

    public ContactService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<bool> CreateContactAsync(ContactRequest request)
    {
        var contact = new Contact
        {
            Name = request.Name,
            Email = request.Email,
            Company = request.Company,
            Service = request.Service,
            Message = request.Message
        };

        _context.Contacts.Add(contact);

        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<List<Contact>> GetAllContactsAsync()
    {
        return await _context.Contacts
            .OrderByDescending(c => c.Id)
            .ToListAsync();
    }

    public async Task<Contact?> GetContactByIdAsync(int id)
    {
        return await _context.Contacts
            .FirstOrDefaultAsync(c => c.Id == id);
    }

    public async Task<bool> DeleteContactAsync(int id)
    {
        var contact = await _context.Contacts.FindAsync(id);

        if (contact == null)
            return false;

        _context.Contacts.Remove(contact);

        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<bool> MarkAsReadAsync(int id)
    {
        var contact = await _context.Contacts.FindAsync(id);

        if (contact == null)
            return false;

        contact.IsRead = true;

        await _context.SaveChangesAsync();

        return true;
    }
}