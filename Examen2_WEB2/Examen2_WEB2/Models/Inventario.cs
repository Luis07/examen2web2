namespace Examen2_WEB2.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Inventario")]
    public partial class Inventario
    {
        public int id { get; set; }

        public int? producto { get; set; }

        [StringLength(50)]
        public string cantidad { get; set; }

        [StringLength(50)]
        public string cantidadminima { get; set; }

        [StringLength(50)]
        public string cantidadmaxima { get; set; }

        [StringLength(50)]
        public string gravadoOexcepto { get; set; }

        public virtual Productos Productos { get; set; }
    }
}
