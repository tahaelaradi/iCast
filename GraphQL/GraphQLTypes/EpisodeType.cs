using System;
using iCast.Models;
using GraphQL.Types;
using iCast.Services;

namespace iCast.GraphQL.GraphQLTypes
{
    public class EpisodeType : ObjectGraphType<Episode>
    {
        public EpisodeType(IAuthorService authors)
        {
            Field(e => e.Id, type: typeof(IdGraphType)).Description("Id");
            Field(e => e.Title, type: typeof(IdGraphType)).Description("Title");
            Field(e => e.Description, type: typeof(IdGraphType)).Description("Description");
            Field(e => e.Like, type: typeof(IdGraphType)).Description("Like");
        }
    }
}
