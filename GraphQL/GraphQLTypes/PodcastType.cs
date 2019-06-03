using System;
using iCast.Models;
using GraphQL.Types;
using iCast.Services;

namespace iCast.GraphQL.GraphQLTypes
{
    public class PodcastType : ObjectGraphType<Podcast>
    {
        public PodcastType(IAuthorService authors, IEpisodeService episodes)
        {
            Field(p => p.Id, type: typeof(IdGraphType)).Description("Id");
            Field(p => p.Title, type: typeof(IdGraphType)).Description("Title");
            Field<AuthorType>("author",
                resolve: context => authors.GetAuthorById(context.Source.AuthorId));
            Field<ListGraphType<EpisodeType>>("episodes",
                resolve: context => episodes.GetEpisodesByPodcastId(context.Source.Id));
        }
    }
}
