namespace Examen2_WEB2.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("detallefactura")]
    public partial class detallefactura
    {
        [Key]
        public int iddetalle { get; set; }

        public int? idfactura { get; set; }

        public int? idproducto { get; set; }

        public int? cantidad { get; set; }

        public int? iddetallefactura { get; set; }

        public virtual Productos Productos { get; set; }

        public virtual encabezadofactura encabezadofactura { get; set; }

        public virtual Productos Productos1 { get; set; }
    }
}
