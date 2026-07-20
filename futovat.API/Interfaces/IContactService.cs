using Futovat.API.DTOs;
using Futovat.API.Entities;

namespace Futovat.API.Interfaces;

public interface IContactService
{
    Task<bool> CreateContactAsync(ContactRequest request);

    Task<List<Contact>> GetAllContactsAsync();

    Task<Contact?> GetContactByIdAsync(int id);

    Task<bool> DeleteContactAsync(int id);

    Task<bool> MarkAsReadAsync(int id);
}