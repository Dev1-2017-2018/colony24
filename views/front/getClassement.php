<table>
        <thead>
          <tr>
              <th>Rang</th>
              <th>Nom</th>
              <th>Score</th>
          </tr>
        </thead>
        <tbody>
              <?php $i = 1; ?>
              <?php foreach ($datasScore as $data) : ?>
                  <tr>
                      <td>
                          <?php echo $i; ?>
                          <?php $i++; ?>
                      </td>
                      <td><?php echo htmlentities($data['pseudo']); ?></td>
                      <td><?php echo htmlentities($data['score']); ?></td>
                  </tr>
              <?php endforeach; ?>
              <tr>
                  <td><?php echo htmlentities($rankUser[0]['rank']+1); ?></td>
                  <td><?php echo htmlentities($scoreUser[0]['pseudo']); ?></td>
                  <td><?php echo htmlentities($scoreUser[0]['score']); ?></td>
              </tr>
      </tbody>
</table>