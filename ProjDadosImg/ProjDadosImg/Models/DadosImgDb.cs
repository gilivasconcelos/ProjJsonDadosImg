using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Configuration.Provider;


namespace ProjDadosImg.Models
{
    public class DadosImgDb
    {

        string conString = ConfigurationManager.ConnectionStrings["MyConnection"].ConnectionString;

  

        #region retornaDadosImg
        public List<DadosImgModel> RetornarDadosImg()
        {

            List<DadosImgModel> List = new List<DadosImgModel>();
            using (SqlConnection con = new SqlConnection(conString))

            {
                con.Open();
                SqlCommand cmd = new SqlCommand("SELECT * FROM tbDadosImg order by idDadosImg asc", con);
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    List.Add(new DadosImgModel
                    {
                        IdDadosImg = Convert.ToInt32(dr["idDadosImg"]),
                        FileSizeBytes = dr["fileSizeBytes"].ToString(),
                        Url = dr["url"].ToString(),
                        Descricao = dr["descricao"].ToString()

                    });
                }
                return List;

            }
        }
        #endregion

        #region Add DadosImg

        public int AddDadosImg(DadosImgModel newDadosImg)
        {
            int i = 0;
            using (SqlConnection con = new SqlConnection(conString))

            {
                con.Open();
                SqlCommand cmd = new SqlCommand("INSERT INTO tbDadosImg(fileSizeBytes,url,descricao) VALUES (' " +
                   newDadosImg.FileSizeBytes + " ' , ' " +
                   newDadosImg.Url + " ' , ' " +
                   newDadosImg.Descricao + " ' ) ; "
                   , con);
                cmd.ExecuteNonQuery();
            }
            return i;
        }
       
       

        #endregion

        #region UpdateDadosImg

        public int AtualizarDadosImg(DadosImgModel newDadosImg)
        {
            int i = 0;

            using (SqlConnection con = new SqlConnection(conString))

            {
                con.Open();
                SqlCommand cmd = new SqlCommand(
                    " UPDATE tbDadosImg SET descricao = '" + newDadosImg.Descricao + "'  " +
                    " where idDadosImg = " + newDadosImg.IdDadosImg + " ; "
                   , con);
                cmd.ExecuteNonQuery();
            }
            return i;
        }

        #endregion

        #region DeletarDadosImg

        public int DeletarDadosImg(int idDadosImg)
        {
            int i = 0;
            using (SqlConnection con = new SqlConnection(conString))

            {
                con.Open();
                SqlCommand cmd = new SqlCommand(" DELETE from tbDadosImg where idDadosImg = " + idDadosImg + " ; "
                   , con);
                cmd.ExecuteNonQuery();
            }
            return i;
        }

        #endregion
    }
}
