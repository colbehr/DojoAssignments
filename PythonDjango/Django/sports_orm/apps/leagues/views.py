from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Q, Count
from . import team_maker

def index(request):
    # league1 =
    # teams = Team.objects.filter(league = league1)
    context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
        "baseball": League.objects.filter(sport="Baseball"),
        "women": League.objects.filter(name__icontains="Womens"),
        "hockey": League.objects.filter(name__icontains="hockey"),
        "notfootball": League.objects.exclude(name__icontains="football"),
        "conferences": League.objects.filter(name__icontains="conference"),
        "atlantic": League.objects.filter(name__icontains="Atlantic"),
        "dallas": Team.objects.filter(location__icontains="Dallas"),
        "raptors": Team.objects.filter(team_name__icontains="Raptors"),
        "city": Team.objects.filter(location__icontains="City"),
        "t": Team.objects.filter(team_name__startswith="t"),
		"allteams": Team.objects.order_by("location"),
		"reverseteams": Team.objects.order_by("-team_name"),
        "cooper": Player.objects.filter(last_name__icontains="cooper"),
        "joshua": Player.objects.filter(first_name__icontains="Joshua"),
        "notjoshua": Player.objects.filter(last_name__icontains="cooper").exclude(first_name__icontains="Joshua"),
        "AlexanderWyatt": Player.objects.filter(Q(first_name__icontains="Alexander") | Q(first_name__icontains="Wyatt")),
        "asc": Team.objects.filter(league = League.objects.get(name__icontains = "Atlantic Soccer Conference")),
        "penguins": Player.objects.filter(curr_team = Team.objects.get(team_name__icontains = "penguins")),
        "icbc": Player.objects.filter(curr_team = Team.objects.get(team_name__icontains = "penguins")),
        'atlantic_soccer_leagues': Team.objects.filter(league = League.objects.get(name__icontains = 'atlantic soccer conference')),
        'penguins_players': Player.objects.filter(curr_team = Team.objects.get(team_name__icontains = "penguins")),
        'icbc_players': Player.objects.filter(curr_team = Team.objects.filter(league= League.objects.get(name__icontains = 'international collegiate baseball conf'))),
        'lopez_league': Player.objects.filter(curr_team = Team.objects.filter(league= League.objects.filter(name__icontains = 'american conf'))).filter(last_name__icontains = 'lopez'),
        'football_players': Player.objects.filter(curr_team__league__sport__icontains = "football"),
        'sophia_teams': Team.objects.filter(curr_players = Player.objects.filter(first_name__icontains = 'sophia')),
        "sophia_leagues": League.objects.filter(teams = Team.objects.filter(curr_players = Player.objects.filter(first_name__icontains = 'sophia'))),
        'flores_roughriders': Player.objects.exclude(curr_team__team_name__icontains = 'rough' ).filter(last_name__icontains = 'flores'),
        'evans_teams': Team.objects.filter(all_players = Player.objects.filter(last_name__icontains = 'evans').filter(first_name__icontains = 'sam')),
        'tiger_players': Player.objects.filter(all_teams__team_name__icontains = 'tiger-cats'),
        'vikings_players': Player.objects.filter(all_teams__team_name__icontains = 'vikings').exclude(curr_team__team_name__icontains = 'vikings'),
        'jacob_teams': Team.objects.filter(all_players__first_name__icontains = 'jacob', all_players__last_name__icontains = 'gray').exclude(team_name = 'Colts'),
        'joshua_players': Player.objects.filter(all_teams__league__name__icontains = 'atlantic federation').filter(first_name__icontains = "joshua"),
        'twelve_teams': Team.objects.annotate(num_all_players = Count('all_players')).filter(num_all_players__gte = 12),
        'teams_players': Player.objects.all().annotate(num_teams = Count('all_teams')).order_by('num_teams')

}
    return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
