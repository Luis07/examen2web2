namespace Examen2_WEB2.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Productos
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Productos()
        {
            detallefactura = new HashSet<detallefactura>();
            detallefactura1 = new HashSet<detallefactura>();
            encabezadofactura = new HashSet<encabezadofactura>();
            Inventario = new HashSet<Inventario>();
        }

        [Key]
        public int idproducto { get; set; }

        [StringLength(50)]
        public string nombre { get; set; }

        [StringLength(50)]
        public string marca { get; set; }

        [StringLength(50)]
        public string familia { get; set; }

        [StringLength(50)]
        public string casafabricacion { get; set; }

        [StringLength(50)]
        public string tipounidad { get; set; }

        [StringLength(50)]
        public string departamento { get; set; }

        [StringLength(50)]
        public string activo { get; set; }

        [StringLength(50)]
        public string fechaingreso { get; set; }

        [StringLength(50)]
        public string unidad { get; set; }

        [StringLength(50)]
        public string impuesto { get; set; }

        public int? costo { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<detallefactura> detallefactura { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<detallefactura> detallefactura1 { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<encabezadofactura> encabezadofactura { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Inventario> Inventario { get; set; }
    }
}
