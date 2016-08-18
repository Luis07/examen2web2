using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace Examen2_WEB2.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("Model1", throwIfV1Schema: false)
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public System.Data.Entity.DbSet<Examen2_WEB2.Models.Clientes> Clientes { get; set; }

        public System.Data.Entity.DbSet<Examen2_WEB2.Models.detallefactura> detallefacturas { get; set; }

        public System.Data.Entity.DbSet<Examen2_WEB2.Models.encabezadofactura> encabezadofacturas { get; set; }

        public System.Data.Entity.DbSet<Examen2_WEB2.Models.Productos> Productos { get; set; }

        public System.Data.Entity.DbSet<Examen2_WEB2.Models.Inventario> Inventarios { get; set; }
    }
}