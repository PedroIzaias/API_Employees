using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ServiceResponse<T>
    {
        public T? Data { get; set; }
        public string Message { get; set; } = string.Empty;
        public bool success { get; set; } = true;
    }
}