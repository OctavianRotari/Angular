describe('GitUserSearchController',function(){
  beforeEach(module('GitUserSearch'));

  var ctrl;
  beforeEach(inject(function($controller){
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialize with empty search result and term',function(){
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
};
