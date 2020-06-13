using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace ProjDadosImg.Models
{
    public class DadosImgModel
    {
        public int IdDadosImg { get; set; }
        public string FileSizeBytes { get; set; }
        public string Url { get; set; }
        public string Descricao { get; set; }
    }
}