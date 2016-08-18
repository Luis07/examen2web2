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
    public class detallefacturasController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/detallefacturas
        public IQueryable<detallefactura> Getdetallefacturas()
        {
            return db.detallefacturas;
        }

        // GET: api/detallefacturas/5
        [ResponseType(typeof(detallefactura))]
        public async Task<IHttpActionResult> Getdetallefactura(int id)
        {
            detallefactura detallefactura = await db.detallefacturas.FindAsync(id);
            if (detallefactura == null)
            {
                return NotFound();
            }

            return Ok(detallefactura);
        }

        // PUT: api/detallefacturas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putdetallefactura(int id, detallefactura detallefactura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != detallefactura.iddetalle)
            {
                return BadRequest();
            }

            db.Entry(detallefactura).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!detallefacturaExists(id))
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

        // POST: api/detallefacturas
        [ResponseType(typeof(detallefactura))]
        public async Task<IHttpActionResult> Postdetallefactura(detallefactura detallefactura)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.detallefacturas.Add(detallefactura);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = detallefactura.iddetalle }, detallefactura);
        }

        // DELETE: api/detallefacturas/5
        [ResponseType(typeof(detallefactura))]
        public async Task<IHttpActionResult> Deletedetallefactura(int id)
        {
            detallefactura detallefactura = await db.detallefacturas.FindAsync(id);
            if (detallefactura == null)
            {
                return NotFound();
            }

            db.detallefacturas.Remove(detallefactura);
            await db.SaveChangesAsync();

            return Ok(detallefactura);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool detallefacturaExists(int id)
        {
            return db.detallefacturas.Count(e => e.iddetalle == id) > 0;
        }
    }
}