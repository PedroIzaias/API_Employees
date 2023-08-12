using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using WebApi.Enums;

namespace WebApi.Models
{
    public class EmployeeModel
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Lastname { get; set; }
        public DepartmentEnum Department { get; set; }
        public bool Active { get; set; }
        public ShiftEnum Shift { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now.ToLocalTime();
        public DateTime ChangeDate { get; set; } = DateTime.Now.ToLocalTime();
    }
}