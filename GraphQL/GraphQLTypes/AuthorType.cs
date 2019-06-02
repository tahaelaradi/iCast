using System;
using iCast.Models;
using GraphQL.Types;

namespace iCast.GraphQL.GraphQLTypes
{
    public class AuthorType : ObjectGraphType<Author>
    {
        public AuthorType()
        {
            Field(a => a.Id, type: typeof(IdGraphType)).Description("Id");
            Field(a => a.Name, type: typeof(IdGraphType)).Description("Name");
        }
    }
}
