namespace Examen2_WEB2.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
        }

        public virtual DbSet<Clientes> Clientes { get; set; }
        public virtual DbSet<detallefactura> detallefactura { get; set; }
        public virtual DbSet<encabezadofactura> encabezadofactura { get; set; }
        public virtual DbSet<Inventario> Inventario { get; set; }
        public virtual DbSet<Productos> Productos { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Clientes>()
                .Property(e => e.cedula)
                .HasPrecision(9, 0);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.apellido)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.fechanacimiento)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.direccion)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.estadocivil)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.sexo)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.fechaingreso)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.tipo)
                .IsUnicode(false);

            modelBuilder.Entity<Clientes>()
                .Property(e => e.descuento)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Clientes>()
                .HasMany(e => e.encabezadofactura)
                .WithOptional(e => e.Clientes)
                .HasForeignKey(e => e.idcliente);

            modelBuilder.Entity<encabezadofactura>()
                .Property(e => e.idcliente)
                .HasPrecision(9, 0);

            modelBuilder.Entity<encabezadofactura>()
                .Property(e => e.impuestos)
                .IsUnicode(false);

            modelBuilder.Entity<encabezadofactura>()
                .HasMany(e => e.detallefactura)
                .WithOptional(e => e.encabezadofactura)
                .HasForeignKey(e => e.idfactura);

            modelBuilder.Entity<Inventario>()
                .Property(e => e.cantidad)
                .IsUnicode(false);

            modelBuilder.Entity<Inventario>()
                .Property(e => e.cantidadminima)
                .IsUnicode(false);

            modelBuilder.Entity<Inventario>()
                .Property(e => e.cantidadmaxima)
                .IsUnicode(false);

            modelBuilder.Entity<Inventario>()
                .Property(e => e.gravadoOexcepto)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.nombre)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.marca)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.familia)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.casafabricacion)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.tipounidad)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.departamento)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.activo)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.fechaingreso)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.unidad)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .Property(e => e.impuesto)
                .IsUnicode(false);

            modelBuilder.Entity<Productos>()
                .HasMany(e => e.detallefactura)
                .WithOptional(e => e.Productos)
                .HasForeignKey(e => e.idproducto);

            modelBuilder.Entity<Productos>()
                .HasMany(e => e.detallefactura1)
                .WithOptional(e => e.Productos1)
                .HasForeignKey(e => e.idproducto);

            modelBuilder.Entity<Productos>()
                .HasMany(e => e.Inventario)
                .WithOptional(e => e.Productos)
                .HasForeignKey(e => e.producto);
        }
    }
}
