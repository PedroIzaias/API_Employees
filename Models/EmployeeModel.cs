using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using WebApi.Enums;

namespace WebApi.Models
{
    public class EmployeeModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public DepartmentEnum Department { get; set; }
        public bool Active { get; set; }
        public ShiftEnum Shift { get; set; }
        public DataTime CreationDate { get; set; } = DateTime.Now.ToLocalTime();
        public DataTime ChangeDate { get; set; } = DataTime.Now.ToLocalTime();
    }
}