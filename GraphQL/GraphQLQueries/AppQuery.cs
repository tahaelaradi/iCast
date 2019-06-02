using System;
using GraphQL.Types;
using iCast.Services;
using iCast.GraphQL.GraphQLTypes;

namespace iCast.GraphQL.GraphQLQueries
{
    public class AppQuery : ObjectGraphType
    {
        public AppQuery(IAuthorService service)
        {
            Field<ListGraphType<AuthorType>>(
                "authors",
                resolve: context => service.GetAll()
            );

            Field<AuthorType>(
                "author",
                arguments: new QueryArguments(
                  new QueryArgument<IdGraphType> { Name = "id" }
                ),
                resolve: context => {
                  var id = context.GetArgument<int>("id");
                  return service.GetAuthorById(id);
                }
            );
        }
    }
}
