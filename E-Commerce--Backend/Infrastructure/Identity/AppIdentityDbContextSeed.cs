using Core.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "ahmed",
                    Email = "ahmed@gmail.com",
                    UserName = "ahmed@gmail.com",
                    Address = new Address
                    {
                        FirstName = "ahmed",
                        LastName = "alaa",
                        Street = "youssef",
                        City = "benha",
                        State = "EG",
                        ZipCode = "6460001"

					}
                };
                await userManager.CreateAsync(user, "A7Med@3Laa");
            }
        }
    }
}
