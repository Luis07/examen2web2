using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Examen2_WEB2.Models;

namespace Examen2_WEB2.Controllers
{
    public class encabezadofacturasController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/encabezadofacturas
        public IQueryable<encabezadofactura> Getencabezadofacturas()
        {
            return db.encabezadofacturas;
        }

        // GET: api/encabezadofacturas/5
        [ResponseType(typeof(encabezadofactura))]
        public async Task<IHttpActionResult> Getencabezadofactura(int id)
        {
            encabezadofactura encabezadofactura = await db.encabezadofacturas.FindAsync(id);
            if (encabezadofactura == null)
            {
                return NotFound();
            }

            return Ok(encabezadofactura);
        }

        // PUT: api/encabezadofacturas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putencabezadofactura(int id, encabezadofactura encabezadofactura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != encabezadofactura.id)
            {
                return BadRequest();
            }

            db.Entry(encabezadofactura).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!encabezadofacturaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/encabezadofacturas
        [ResponseType(typeof(encabezadofactura))]
        public async Task<IHttpActionResult> Postencabezadofactura(encabezadofactura encabezadofactura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.encabezadofacturas.Add(encabezadofactura);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = encabezadofactura.id }, encabezadofactura);
        }

        // DELETE: api/encabezadofacturas/5
        [ResponseType(typeof(encabezadofactura))]
        public async Task<IHttpActionResult> Deleteencabezadofactura(int id)
        {
            encabezadofactura encabezadofactura = await db.encabezadofacturas.FindAsync(id);
            if (encabezadofactura == null)
            {
                return NotFound();
            }

            db.encabezadofacturas.Remove(encabezadofactura);
            await db.SaveChangesAsync();

            return Ok(encabezadofactura);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool encabezadofacturaExists(int id)
        {
            return db.encabezadofacturas.Count(e => e.id == id) > 0;
        }
    }
}