using KeepMovinAPI.Repository;
using System;

namespace KeepMovinAPI.Authentication
{
    public interface IValidation
    {
        public bool Validate(Guid userId, string jwt);
    }
}
