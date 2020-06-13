using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProjDadosImg.Models;




namespace ProjDadosImg.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


        //

        //View Tela de DadosImg
        public ActionResult DadosImg()
        {
            return View();
        }

        //View Tela de Inicio
        public ActionResult Inicio()
        {
            return View();
        }

        //conexao

        DadosImgDb dbDadosImg = new DadosImgDb();

        //metodos DadosImg
        #region metodosProBancoDaImagem
        public JsonResult ListarDadosImg()
        {
            return Json(dbDadosImg.RetornarDadosImg(), JsonRequestBehavior.AllowGet);
        }
        
        public JsonResult AddNewDadosImg(DadosImgModel dadosImg)
        {

            return Json(dbDadosImg.AddDadosImg(dadosImg), JsonRequestBehavior.AllowGet);


        }
                public JsonResult BuscarDadosImgPorId(int id)
        {
            var VarDadosImg = dbDadosImg.RetornarDadosImg().Find(x => x.IdDadosImg.Equals(id));
            return Json(VarDadosImg, JsonRequestBehavior.AllowGet);
        }



        public JsonResult UpdateDadosImg(DadosImgModel dadosImg)

        {
            return Json(dbDadosImg.AtualizarDadosImg(dadosImg), JsonRequestBehavior.AllowGet);

        }


        public JsonResult DeletarDadosImg(int id)
        {
            return Json(dbDadosImg.DeletarDadosImg(id), JsonRequestBehavior.AllowGet);
        }

        #endregion
    }
}