var CalculatorMapper = require(MAPPERS_DIR + '/Calculator');
var QueryRunner = require(MAPPERS_DIR + '/QueryRunner');

describe ('CalculatorMapper', function () {

  var table, row, db, sandbox,
      nameToSearch = 'test calculator',
      matchingCalculators = [{
        name: 'test calculator'
      }, {
        name: 'another test calculator'
      }, {
        name: 'test calculator again'
      }];

  beforeEach(function() {
    sandbox = sinon.sandbox.create();

    // Given
    table = sandbox.stub({
      filter: function(filter) {},
      orderBy: function(key) {},
      limit: function(n) {}
    });
    table.filter.returns(table);
    table.orderBy.returns(table);
    table.limit.returns(table);

    row = sandbox.stub({ match: function(pattern) {} });

    db = sandbox.stub({
      table: function(tableName) {},
      row: function(property) {}
    });
    db.table.returns(table);
    db.row.returns(row);

    sandbox.stub(QueryRunner, 'run', function(queryCallback, cb) {
      queryCallback(db);
      cb(null, matchingCalculators);
    });
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('getByName()', function() {
    it ('should return calculators matched by name', function (done) {
      // When
      CalculatorMapper.getByName(nameToSearch, function(err, results) {
        // Then
        expect(results).to.be.equal(matchingCalculators);
        expect(db.table.calledWithExactly('calculators')).to.be.true;
        expect(db.row.calledWithExactly('name')).to.be.true;
        expect(row.match.calledWithExactly('(?i)' + nameToSearch)).to.be.true;
        expect(table.filter.calledOnce).to.be.true;
        done();
      });
    });

    it ('should return calculators ordered by name', function(done) {
      // When
      CalculatorMapper.getByName(nameToSearch, function(err, results) {
        // Then
        expect(table.orderBy.calledWithExactly('name')).to.be.true;
        done();
      });
    });

    it ('should return maximum 100 calculators per search results', function(done) {
      // When
      CalculatorMapper.getByName(nameToSearch, function(err, results) {
        // Then
        expect(table.limit.calledWithExactly(100)).to.be.true;
        done();
      });
    });
  });
});
