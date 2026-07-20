using Futovat.API.Data;
using Futovat.API.DTOs;
using Futovat.API.Interfaces;
using Futovat.API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Futovat.API.Settings;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace Futovat.API.Services;

public class AuthService : IAuthService
{
    private readonly ApplicationDbContext _context;
    private readonly JwtSettings _jwtSettings;

    public AuthService(
        ApplicationDbContext context,
        IOptions<JwtSettings> jwtOptions)
    {
        _context = context;
        _jwtSettings = jwtOptions.Value;
    }

    public async Task<bool> RegisterAsync(RegisterRequest request)
    {
        // Check if email already exists
        if (await _context.Admins.AnyAsync(a => a.Email == request.Email))
        {
            return false;
        }

        var admin = new Admin
        {
            Name = request.Name,
            Email = request.Email
        };

        // Hash the password
        var passwordHasher = new PasswordHasher<Admin>();
        admin.PasswordHash = passwordHasher.HashPassword(admin, request.Password);

        _context.Admins.Add(admin);

        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<string?> LoginAsync(LoginRequest request)
    {
        var admin = await _context.Admins
            .FirstOrDefaultAsync(a => a.Email == request.Email);

        if (admin == null)
            return null;

        var passwordHasher = new PasswordHasher<Admin>();

        var result = passwordHasher.VerifyHashedPassword(
            admin,
            admin.PasswordHash,
            request.Password);

        if (result != PasswordVerificationResult.Success)
            return null;

        var claims = new List<Claim>
    {
        new Claim(ClaimTypes.NameIdentifier, admin.Id.ToString()),
        new Claim(ClaimTypes.Name, admin.Name),
        new Claim(ClaimTypes.Email, admin.Email),
        new Claim(ClaimTypes.Role, "Admin")
    };

        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_jwtSettings.Key));

        var credentials = new SigningCredentials(
            key,
            SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _jwtSettings.Issuer,
            audience: _jwtSettings.Audience,
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(_jwtSettings.ExpiryMinutes),
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}