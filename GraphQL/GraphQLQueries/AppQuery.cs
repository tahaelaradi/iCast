using System;
using GraphQL.Types;
using iCast.Services;
using iCast.GraphQL.GraphQLTypes;

namespace iCast.GraphQL.GraphQLQueries
{
    public class AppQuery : ObjectGraphType
    {
        public AppQuery(
            IAuthorService authorService,
            IPodcastService podcastService,
            IEpisodeService episodeService
            )
        {
            Field<ListGraphType<AuthorType>>(
                "authors",
                resolve: context => authorService.GetAll()
            );

            Field<AuthorType>(
                "author",
                arguments: new QueryArguments(
                  new QueryArgument<IdGraphType> { Name = "id" }
                ),
                resolve: context => {
                  var id = context.GetArgument<int>("id");
                  return authorService.GetAuthorById(id);
                }
            );

            Field<ListGraphType<PodcastType>>(
                "podcasts",
                resolve: context => podcastService.GetAll()
            );

            Field<PodcastType>(
                "podcast",
                arguments: new QueryArguments(
                  new QueryArgument<IdGraphType> { Name = "id" }
                ),
                resolve: context => {
                  var id = context.GetArgument<int>("id");
                  return podcastService.GetPodcastById(id);
                }
            );

            Field<ListGraphType<EpisodeType>>(
                "episodes",
                resolve: context => episodeService.GetAll()
            );

            Field<EpisodeType>(
                "episode",
                arguments: new QueryArguments(
                  new QueryArgument<IdGraphType> { Name = "id" }
                ),
                resolve: context => {
                  var id = context.GetArgument<int>("id");
                  return episodeService.GetEpisodeById(id);
                }
            );
        }
    }
}
