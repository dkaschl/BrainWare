using Api.Models.Contracts;
using Api.Models.Entities;

namespace Api.Infrastructure.Service
{
    public class CompanyService : ICompanyService
    {
        private ProjectDbContext _context;

        public CompanyService()
        {
            _context = new ProjectDbContext(ConfigurationHelper.config);
        }

        public IEnumerable<CompanyDto> GetAll()
        {
            return _context.Companies.Select(c => new CompanyDto
            {
                CompanyId = c.CompanyId,
                Name = c.Name,
            });
        }

    }
}
