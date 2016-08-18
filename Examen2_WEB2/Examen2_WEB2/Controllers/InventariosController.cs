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
    public class InventariosController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Inventarios
        public IQueryable<Inventario> GetInventarios()
        {
            return db.Inventarios;
        }

        // GET: api/Inventarios/5
        [ResponseType(typeof(Inventario))]
        public async Task<IHttpActionResult> GetInventario(int id)
        {
            Inventario inventario = await db.Inventarios.FindAsync(id);
            if (inventario == null)
            {
                return NotFound();
            }

            return Ok(inventario);
        }

        // PUT: api/Inventarios/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutInventario(int id, Inventario inventario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != inventario.id)
            {
                return BadRequest();
            }

            db.Entry(inventario).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InventarioExists(id))
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

        // POST: api/Inventarios
        [ResponseType(typeof(Inventario))]
        public async Task<IHttpActionResult> PostInventario(Inventario inventario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Inventarios.Add(inventario);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = inventario.id }, inventario);
        }

        // DELETE: api/Inventarios/5
        [ResponseType(typeof(Inventario))]
        public async Task<IHttpActionResult> DeleteInventario(int id)
        {
            Inventario inventario = await db.Inventarios.FindAsync(id);
            if (inventario == null)
            {
                return NotFound();
            }

            db.Inventarios.Remove(inventario);
            await db.SaveChangesAsync();

            return Ok(inventario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool InventarioExists(int id)
        {
            return db.Inventarios.Count(e => e.id == id) > 0;
        }
    }
}