using System;
using GraphQL;
using GraphQL.Types;
using iCast.GraphQL.GraphQLQueries;

namespace iCast.GraphQL.GraphQLSchema
{
    public class AppSchema : Schema
    {
        public AppSchema(IDependencyResolver resolver)
            : base(resolver)
        {
            Query = resolver.Resolve<AppQuery>();
        }
    }
}
