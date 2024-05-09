namespace Api.Controllers
{
    using Api.Infrastructure;
    using Api.Infrastructure.Service;
    using Api.Models;
    using Api.Models.Contracts;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/company")]
    public class CompanyController : ControllerBase
    {

        private readonly ICompanyService _companyService;

        public CompanyController(ICompanyService companyService)
        {
            this._companyService = companyService;
        }

        [HttpGet()]
        public IEnumerable<CompanyDto> GetAll()
        {
            return _companyService.GetAll();
        }
    }
}
