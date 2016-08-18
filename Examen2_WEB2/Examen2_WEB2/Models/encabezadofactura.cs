namespace Examen2_WEB2.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("encabezadofactura")]
    public partial class encabezadofactura
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public encabezadofactura()
        {
            detallefactura = new HashSet<detallefactura>();
        }

        public int id { get; set; }

        public int? idproducto { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? idcliente { get; set; }

        public DateTime? fecha { get; set; }

        public int? montotal { get; set; }

        public int? subtotal { get; set; }

        [StringLength(50)]
        public string impuestos { get; set; }

        public int? idencabezadofactura { get; set; }

        public virtual Clientes Clientes { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<detallefactura> detallefactura { get; set; }

        public virtual Productos Productos { get; set; }
    }
}
