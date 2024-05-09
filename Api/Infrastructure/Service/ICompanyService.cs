using Api.Models.Contracts;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;

namespace Api.Infrastructure.Service
{
    public interface ICompanyService
    {
        public IEnumerable<CompanyDto> GetAll();
    }
}
