using Futovat.API.DTOs;

namespace Futovat.API.Interfaces;

public interface IAuthService
{
    Task<bool> RegisterAsync(RegisterRequest request);

    Task<string?> LoginAsync(LoginRequest request);
}